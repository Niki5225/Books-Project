import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAuthorComponent } from './selected-author.component';

describe('SelectedAuthorComponent', () => {
  let component: SelectedAuthorComponent;
  let fixture: ComponentFixture<SelectedAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedAuthorComponent]
    });
    fixture = TestBed.createComponent(SelectedAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
