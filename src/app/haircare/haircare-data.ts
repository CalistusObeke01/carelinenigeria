import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Haircare } from './haircare';

export class HaircareData implements InMemoryDbService {

  createDb() {
    const haircareProducts: Haircare[] = [
      {
        id: 1,
        productName: 'KERATIN SHAMPOO',
        productTitle: 'NON-SULFATE KERATIN ENRICHED',
        description: `Post Keratin treatment shampoo formulated without any sulfates or
        ingredients that are harmful or may wear the hair. Enriched with keratin for healthier
        looking hair and a lipid layer enhanced to replace natural hair lubricant`,
        price: 2000,
        imageUrl: 'assets/images/kertain-shampooo.png'
      },
      {
        id: 2,
        productName: 'KERATIN CONDITIONER',
        productTitle: 'ANTI-FRIZZ TREATMENT VITAMIN A & B',
        description: `Unique formula includes wheat protein, shea butter and keratin to keep the
        hair looking healthy at all times in addition to anti-frizz treatment. Also specially
        formulated for colour care with seaweed extract enriched with vitamins A and B.`,
        price: 3500,
        imageUrl: 'assets/images/Keratin-conditioner.png'
      },
      {
        id: 3,
        productName: 'COLOUR CARE SHAMPOO',
        productTitle: 'KERATIN ENRICHED',
        description: `As coloured hair will loose its colour and turn brassy, yellow and pale
        during exposure to sun, this shampoo will maintain the desired colour for as long as you use it.`,
        price: 5000,
        imageUrl: 'assets/images/Colour-Care-SHAMPOO.png'
      },
      {
        id: 4,
        productName: 'HAIR MASK',
        productTitle: 'ANTI-FRIZZ TREATMENT VITAMIN A & B',
        description: `
        This leave-on treatment is designed to smooth and control curly and wavy hair. In this
        elegant smoothing milk, unique combination of conditioners and emollients provides
        excellent conditioning, control and texture to curly and straight hair, while also
        delivering a healthy, moisturised look and feel to the hair.`,
        price: 2500,
        imageUrl: 'assets/images/hair-mask.png'
      },
      {
        id: 5,
        productName: 'ANTI-DANDRUFF CONDITIONER',
        productTitle: 'DAILY CARE',
        description: `This formula, part of SKINLAB’s Anti--Dandruff Treatment, is an ideal conditioner
         for fine and slightly porous hair. It reduces and prevents the formation of dandruff.
          Its anti-dandruff efficacy is supported by uniquely formulated anti-fungal and scalp
           conditioner.`,
        price: 3000,
        imageUrl: 'assets/images/Anti-Dandruff-conditionr.png'
      },
      {
        id: 6,
        productName: 'ANTI-DANDRUFF SHAMPOO',
        productTitle: 'DAILY CARE',
        description: `Dandruff caused by either overproduced sebum or residues from other hair
        product substances can create issues like itchiness, redness and eventually hair loss.
        To combat the white flaky foes and soothe redness and irritation, SKINLAB Anti-Dandruff
        shampoo with daily use, makes the hair more manageable. Since dandruff is a natural
        process it cannot be eliminated, it can only be controlled`,
        price: 4000,
        imageUrl: 'assets/images/Anti-Dandruff-shampoo.png'
      }
    ];
    return { haircareProducts };
  }
}

