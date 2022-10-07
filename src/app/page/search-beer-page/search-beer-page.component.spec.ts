import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBeerPageComponent } from './search-beer-page.component';

describe('SearchBeerPageComponent', () => {
  let component: SearchBeerPageComponent;
  let fixture: ComponentFixture<SearchBeerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBeerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBeerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
