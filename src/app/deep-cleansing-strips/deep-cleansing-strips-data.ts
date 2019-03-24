import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DeepCleansingStrips } from './deep-cleansing-strips';

export class DeepCleansingStripsData implements InMemoryDbService {

  createDb() {
    const deepCleansingStripsProducts: any[] = [
      {
        id: 1,
        productTitle: 'Natural Deep Cleansing',
        productSubTitle: 'NOSE STRIPS',
        description: `Nothing beats nose strips when it comes to deep cleansing and re-
        moving stubborn blackheads. These strong and highly effective strips
        are not designed for daily use, but for the ultimate depletion of bac-
        teria and skin impurities plus post anti-bacterial treatment over the
        course of 3 applications across 9 days (for full cleanse).`,
        price: 2000,
        imageUrl: 'assets/images/natural-deep-cleansing.png'
      },
      {
        id: 2,
        productTitle: 'Charcoal Deep Cleansing',
        productSubTitle: 'THE POWER OF CARBON',
        description: `A natural purifying agent that captures dirt, grease, and other
        impurities caused by pollution while helping to unclog pores.`,
        price: 3500,
        imageUrl: 'assets/images/charcoal-deep-cleansing.png'
      },
      {
        id: 3,
        productTitle: 'Green Tea Deep Cleansing',
        productSubTitle: 'NOSE STRIPS',
        description: `Green Tea is often called liquid jade — not just because of its
        beautiful colour, but also for its powerful health and beauty benefits.
        Green Tea is a rich source of Epigallocatechin Gallate, or EGCG,
          widely regarded as one of the most powerful antioxidants available.
          Its polyphenols target free radicals, particularly those caused by
          UV-induced oxidative damage.`,
        price: 5000,
        imageUrl: 'assets/images/green-tea-deep-cleansing.png'
      },
      {
        id: 4,
        productTitle: 'Rose Deep Cleansing',
        productSubTitle: 'NOSE STRIPS',
        description: `
        We already instinctively entwine roses with nations of beauty and love.
          It seems only fitting then that roses actually do offer beauty-enhancing
          benefits. This iconic flower specifically does beauty wonders on the skin.

          Discover how this lush blossom can make your skin feel as velvety soft as a bed of roses
          1. Antibacterial : Naturally antibacterial rose essential oil makes can help treat
          acne and acne-prone skin. Combined with its cleansing properties, rose makes an
          ideal ingredient in face washes and cleansers.

          2. Antioxidants : Rose contains high amounts of vitamin C, a powerful antioxidant.
          This important vitamin can help protect skin cells from damage, such as from
          staying out in the sun too long. Some evidence even suggests that rose water can help prevent sunburn.

          3. Moisturising : The natural oils found in roses help lock moisture into the skin,
          keeping skin feeling smooth. Rose is especially beneficial for those with sensitive
          skin because the sugars in its petals create a soothing feeling.

          4. Naturally fragrant : Many organic beauty products choose to include rose
          for its delicate aroma in lieu of artificial fragrances.

          5. Tonging : As a natural astrigent, rose helps tighten pores and restore
          suppleness for a glowy complexion. Unlike conventional alcohal-based toners,
          rose leaves skin feeling smooth, not dried out.
          `,
        price: 2500,
        imageUrl: 'assets/images/rose-deep-cleansing.png'
      },
      {
        id: 5,
        productTitle: 'CUCUMBER AND MINT',
        productSubTitle: 'NOSE STRIPS',
        description: `Rich in menthol and anti-bacterial properties, mint is a precious gift of
        mother nature which is bestowed upon us. Being a herb loaded with innumerable
         beauty benefits, mint is used in various cleanser, toner, astringent and moisturizer.
         This mint nose pack cleanses and tightens your pores completely, thus, giving you
         fresh and oil-free skin tone. Cucumber?

         Did you know that Cucumber Juice is an excellent astringent for a beautiful,
         smooth skin? Yes it is. Applying cucumber on the face helps tighten the skin
         pores. Thus the Cucumber & Mint duo is perfect for those with large skin pores
         to have them tightened up and remain clean after the nose strip is removed.`,
        price: 3000,
        imageUrl: 'assets/images/cucumber-and-mint-deep-cleansing.png'
      },
      {
        id: 6,
        productTitle: 'CHOCOLATE',
        productSubTitle: 'NOSE STRIPS',
        description: `If you’re looking to have healthy skin, but still want a sweet treat then you’ll
        love the new chocolate nose strips from CareLine! This isn’t just because it’s
        delicious(!), but mostly because the health benefits are so beneficial to your
        skin, especially if you suffer from eczema.

        The European Journal of Nutrition showed that consistently intake of cocoa for
        12 weeks reduced moisture loss in skin by 25 percent, resulting in fewer sunburns.
        This is because cocoa boosts blood circulation to the fine skin capillaries in
        the top layer of your skin, helping them to draw more oxygen and nutrients to
         protect the skin against dehydration and burns.
        `,
        price: 4000,
        imageUrl: 'assets/images/chocolate-deep-cleansing.png'
      }
    ];
    return { deepCleansingStripsProducts };
  }
}

