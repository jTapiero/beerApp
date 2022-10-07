import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteBeerPageComponent } from './favourite-beer-page.component';

describe('FavouriteBeerPageComponent', () => {
  let component: FavouriteBeerPageComponent;
  let fixture: ComponentFixture<FavouriteBeerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteBeerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteBeerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
