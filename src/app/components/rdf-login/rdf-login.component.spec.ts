import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfLoginComponent } from './rdf-login.component';

describe('RdfLoginComponent', () => {
  let component: RdfLoginComponent;
  let fixture: ComponentFixture<RdfLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdfLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
