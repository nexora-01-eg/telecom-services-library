# ============================================
#  منظف القرص C التلقائي - يشتغل كل ساعتين
#  بينضف الملفات المؤقتة والكاش بس (آمن)
# ============================================

$folder = "C:\Users\fagr\Documents\c-cleaner"
$logDir = "$folder\logs"
$log    = "$logDir\clean-" + (Get-Date -Format "yyyy-MM") + ".log"

# لو مجلد الدفتر (اللوج) مش موجود، اعمله
if (-not (Test-Path $logDir)) { New-Item -ItemType Directory -Path $logDir -Force | Out-Null }

# دالة صغيرة: بترجع المساحة الفاضية على C بالجيجابايت
function Get-FreeGB { [math]::Round((Get-PSDrive C).Free / 1GB, 2) }

$before = Get-FreeGB
$time   = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# ---- 1) ملفات Temp بتاعة المستخدم (الأقدم من ساعتين بس) ----
# SilentlyContinue معناها: لو ملف مقفول ومش قادر تمسحه، تجاهله وكمّل
Get-ChildItem "$env:LOCALAPPDATA\Temp" -Force -ErrorAction SilentlyContinue |
    Where-Object { $_.LastWriteTime -lt (Get-Date).AddHours(-2) } |
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# ---- 2) Temp بتاعة الويندوز نفسه (يشتغل لو في صلاحيات Admin) ----
Remove-Item "C:\Windows\Temp\*" -Recurse -Force -ErrorAction SilentlyContinue

# ---- 3) كاش كروم (بيتحمل تاني لوحتاجه، والملفات المقفولة بتتخطى) ----
foreach ($c in @(
    "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Cache",
    "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Code Cache"
)) {
    if (Test-Path $c) {
        Get-ChildItem $c -Force -ErrorAction SilentlyContinue |
            Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
    }
}

# ---- 4) كاش npm (أدوات المبرمجة) - ننضفه بس لو كبر عن 500 ميجا ----
$npmCache = "$env:LOCALAPPDATA\npm-cache"
if (Test-Path $npmCache) {
    $sizeMB = [math]::Round(((Get-ChildItem $npmCache -Recurse -Force -ErrorAction SilentlyContinue |
        Measure-Object Length -Sum).Sum) / 1MB)
    if ($sizeMB -gt 500) { cmd /c "npm cache clean --force" 2>$null }
}

$after = Get-FreeGB
$freed = [math]::Round($after - $before, 2)

# ---- سجل العملية في الدفتر: قبل / اتحرر قد إيه / بعد ----
Add-Content -Path $log -Value "$time | before: $before GB | freed: $freed GB | now: $after GB" -Encoding UTF8

# ---- إنذار مبكر: لو C نزل تحت 10 جيجا اكتب تحذير في الدفتر ----
if ($after -lt 10) {
    Add-Content -Path $log -Value "$time | !!! WARNING: C low on space (<10 GB)" -Encoding UTF8
}
