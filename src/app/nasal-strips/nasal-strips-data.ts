import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NasalStrips} from './nasal-strips';

export class NasalStripsData implements InMemoryDbService {

  createDb() {
    const nasalStripsProducts: NasalStrips[] = [
      {
        productTitle: 'Breathe Easy Nasal Strips',
        description: `Sleep comfortably in which ever position you desire
        with Breathe Easy’s anti-snoring nasal strips. The healthy
        drug-free solution to enable a good nights sleep without a sound.`,
        imageUrl: 'assets/images/nasal-strip-item.png',
        notice: 'Always wash face and dry before applying.',
        price: 2000
      }
    ];
    return { nasalStripsProducts };
  }
}


