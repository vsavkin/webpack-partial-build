import { async, TestBed } from '@angular/core/testing';
import { PublishableModule } from './publishable.module';

describe('PublishableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PublishableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PublishableModule).toBeDefined();
  });
});
