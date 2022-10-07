import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerFavouriteComponent } from './beer-favourite.component';

describe('BeerFavouriteComponent', () => {
  let component: BeerFavouriteComponent;
  let fixture: ComponentFixture<BeerFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerFavouriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
