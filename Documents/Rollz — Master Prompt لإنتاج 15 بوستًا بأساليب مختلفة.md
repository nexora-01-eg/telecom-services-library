# Rollz — Master Prompt لإنتاج 15 بوستًا بأساليب مختلفة

## طريقة الاستخدام

استخدم هذا البرومبت مع **حزمة هوية Rollz الأصلية**، وصور الطعام الحقيقية، وصور المطعم أو التغليف، ثم أضف **مرجع Pinterest واحدًا فقط لكل بوست**. المرجع يحدد الأسلوب البصري لذلك البوست، بينما هذا البرومبت يحافظ على هوية Rollz الرقمية في جميع البوستات.

ينتج كل تشغيل **بوستًا مستقلًا واحدًا**، وليس لوحة تجمع عدة بوستات. كرر التشغيل 15 مرة، وغيّر فقط حقول `POST NUMBER` و`PINTEREST STYLE REFERENCE` و`PRODUCT` و`MESSAGE` و`CTA` و`SPECIAL DETAIL`.

---

## البرومبت الأساسي — انسخه كما هو

```text
Create one finished, standalone 4:5 social-media poster for the Rollz food brand.

PROJECT:
This is one post from a 15-post campaign. Every post must look visually different from the other posts because each post uses a different Pinterest style reference, but all 15 posts must clearly belong to the same Rollz brand system.

SOURCE MATERIAL HIERARCHY:
1. The supplied official Rollz brand pack is the highest authority for brand identity.
2. The supplied authentic Rollz food, packaging, restaurant, and product photos are the highest authority for product appearance.
3. The supplied Pinterest image is a style reference only. It controls the visual direction of this single post, not the Rollz identity.

BRAND IDENTITY — NEVER CHANGE THESE:
- Use the exact supplied official Rollz logo. Do not redraw it, reinterpret it, replace it, distort it, crop it, recolor it, or invent a new logo.
- Keep the logo clearly recognizable and correctly spelled. Place it where it naturally works in the reference layout, but keep it visible and small-to-medium rather than oversized.
- Use the Rollz brand palette consistently: deep navy, warm cream, Rollz gold, and Rollz orange. Default working palette: deep navy #0A192F, warm cream #F5F2EB, gold #D4AF37, and orange #F47A16. Sample the supplied official logo and brand assets whenever possible instead of inventing new colors.
- Red may appear only when it is already part of the official Rollz logo or supplied brand assets. Do not make red the main campaign color.
- Use one consistent Arabic brand type family across the campaign. If an official font file or font name is supplied, use it. If no font is supplied, use one clean, bold Arabic geometric sans-serif family and do not switch to unrelated fonts between posts.
- Keep the overall Rollz fingerprint visible through the logo treatment, color palette, typography discipline, food photography quality, and a clear CTA area.
- Do not add other restaurant logos, fake partner logos, watermark text, stock-brand logos, prices, phone numbers, addresses, or claims unless they are explicitly supplied in the input fields.

PRODUCT TRUTH:
- Use the supplied authentic Rollz food and restaurant references as the source of truth.
- Preserve the real food shape, ingredients, proportions, packaging, sauces, textures, and serving style.
- Do not invent ingredients, products, menu items, prices, offers, locations, or packaging details.
- Make the food look appetizing, fresh, believable, and professionally photographed.
- If the Pinterest reference contains another brand, remove or replace all foreign branding with Rollz branding while keeping only the useful composition or art direction.

STYLE ADAPTATION RULE:
Study the Pinterest reference and borrow only its relevant visual language for this post: composition, hierarchy, framing, crop, lighting, texture, background treatment, graphic rhythm, illustration language, editorial structure, collage logic, or typographic energy.
Do not copy any foreign logo, brand name, slogan, exact artwork, mascot, proprietary packaging, or unrelated product. The Pinterest reference must become a Rollz interpretation, not a copy.

LAYOUT AND COPY:
- Use the exact Arabic headline and CTA supplied below. Do not paraphrase, translate, duplicate, or add extra copy.
- Keep Arabic right-to-left, correctly joined, clean, large, and readable.
- Prioritize the product, then the headline, then the CTA, then the logo.
- Keep enough contrast between text and background.
- The CTA must be visually obvious and easy to find, but it should belong naturally to the Pinterest-inspired composition.
- Do not fill the design with unnecessary text.

POST INPUT:
POST NUMBER: [01–15]
PINTEREST STYLE REFERENCE: [attach exactly one Pinterest reference image]
PRODUCT / AUTHENTIC PRODUCT REFERENCES: [attach one or more original Rollz food or restaurant images]
HEADLINE IN ARABIC: [exact headline]
CTA IN ARABIC: [exact call to action]
SPECIAL DETAIL: [one optional visual detail, such as cheese pull, sauce splash, hand-drawn line, menu grid, paper texture, sticker shape, premium frame, or motion-like graphic]

OUTPUT:
- One finished standalone 4:5 social-media poster.
- High-resolution, sharp, polished, and ready for Instagram feed or campaign use.
- Keep the supplied Rollz food and logo accurate.
- Make this post visibly different from the other 14 posts through the supplied Pinterest style reference, while preserving the same Rollz identity system.

AVOID:
foreign logos, altered Rollz logo, misspelled Rollz, invented Arabic words, unreadable Arabic, fake prices, fake contact details, extra menu items, generic stock food, distorted food, duplicate products, unrelated colors, visual clutter, excessive copy, watermarks, borders that hide the product, or a multi-post collage.
```

---

## قالب تشغيل مختصر لكل بوست

```text
Use the Rollz Master Prompt exactly as written.

POST NUMBER: [01–15]
PINTEREST STYLE REFERENCE: [attach one reference image]
PRODUCT / AUTHENTIC PRODUCT REFERENCES: [attach original Rollz photos]
HEADLINE IN ARABIC: [exact text]
CTA IN ARABIC: [exact CTA]
SPECIAL DETAIL: [optional detail]

Generate one standalone 4:5 Rollz social-media poster. Keep the Rollz logo, palette, typography discipline, product accuracy, and Arabic copy exact. Make the layout and visual treatment clearly different from the other posts by following this post’s Pinterest style reference only.
```

---

## خطة الـ15 بوستًا

| البوست | اتجاه Pinterest المقترح | بطل التصميم | نوع الرسالة | CTA مقترح |
|---|---|---|---|---|
| 01 | Bold poster / giant typography | برغر Rollz | الجوع له حل واضح | اطلب الآن |
| 02 | Editorial magazine cover | رول محشو | الجودة في التفاصيل | جرّب رولك |
| 03 | Hand-drawn food illustration | بطاطس وصوص | الإضافة تصنع الفرق | خليها أساسية |
| 04 | Premium dark product shot | برغر Signature | الاختيار المميز | جرّب Signature |
| 05 | Modular menu-grid layout | وجبة مشاركة | كل واحد يلاقي اختياره | شارك الوجبة |
| 06 | Sticker / label composition | مقرمشات | القرمشة هي البطل | اطلب المقرمش |
| 07 | Lifestyle restaurant editorial | فرع Rollz | المكان جزء من التجربة | زور Rollz |
| 08 | Sauce macro / sensory layout | رول مع صوص | التفاصيل تصنع الطعم | زود الصوص |
| 09 | Minimal cream poster | بطاطس بالجبنة | افتح شهيتك بلقطة واحدة | اطلب البطاطس |
| 10 | High-energy orange graphic style | برغر | طاقة ومزاج أفضل | خلّيها Rollz |
| 11 | Luxury catalog / product card | وجبة كاملة | تجربة تستحق | اطلب وجبتك |
| 12 | Playful cutout collage | رولز ومقبلات | شارك اللحظة | لمّ صحابك |
| 13 | Cinematic close-up | تفاصيل اللحم والجبنة | أول لقمة بتفرق | جرّب بنفسك |
| 14 | Geometric brand system | تنويع المنتجات | اختيارات كثيرة وهوية واحدة | اختار مزاجك |
| 15 | Campaign closing poster | أفضل وجبة Rollz | الخاتمة بطلب مباشر | اطلب الآن |

هذه الاتجاهات ليست قيودًا. إذا كان مرجع Pinterest مختلفًا، فالأولوية للمرجع في **التركيب والأسلوب فقط**، مع بقاء هوية Rollz ثابتة.

---

## قواعد اختيار الصور

استخدم من صورة إلى ثلاث صور أصلية لكل بوست: صورة المنتج الأساسية، وصورة قريبة للتفاصيل عند الحاجة، وصورة للمكان أو التغليف إذا كانت الفكرة تحتاج سياقًا. لا تستخدم أكثر من ثلاثة مراجع حتى لا يختلط المنتج أو يتغير شكله.

عند استخدام صورة Pinterest، ارفعها باعتبارها **STYLE REFERENCE** فقط. ارفع صور Rollz باعتبارها **PRODUCT REFERENCES**، وارفع شعار Rollz باعتباره **BRAND IDENTITY REFERENCE**. هذا الفصل يمنع النموذج من أخذ شعار أو ألوان العلامة الأخرى الموجودة في مرجع Pinterest.

---

## قاعدة الجودة قبل اعتماد أي بوست

اعتمد البوست فقط إذا كان الشعار صحيحًا، وألوان Rollz واضحة، والمنتج يشبه الصور الأصلية، والعنوان العربي وCTA مقروءين، والأسلوب مختلفًا فعلًا عن البوستات الأخرى، ولا توجد علامات تجارية غريبة أو معلومات مختلقة. إذا فشل عنصر واحد، أعد توليد البوست نفسه مع تعديل ذلك العنصر فقط بدل تغيير هوية Rollz كلها.

---

## أمر سريع للاستخدام مستقبلًا

```text
Use the Rollz Master Prompt. Create Post [NUMBER] using the attached Pinterest image as STYLE REFERENCE only, the attached Rollz food photos as PRODUCT REFERENCES, and the attached Rollz logo as BRAND IDENTITY REFERENCE. Keep all Rollz identity rules fixed. Use the exact Arabic headline “[HEADLINE]” and CTA “[CTA]”. Produce one standalone 4:5 poster, not a collage.
```

هذا البرومبت يفصل بوضوح بين **ما يجب أن يظل ثابتًا**—اللوجو، الألوان، الخط، دقة المنتج، وطريقة كتابة الهوية—وبين **ما يمكن تغييره** في كل مرة—التركيب، الإضاءة، القص، الخامات، طريقة عرض الطعام، واللغة البصرية المستوحاة من Pinterest.
