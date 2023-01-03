import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmocaoAreaComponent } from './emocao-area.component';

describe('EmocaoAreaComponent', () => {
  let component: EmocaoAreaComponent;
  let fixture: ComponentFixture<EmocaoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmocaoAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmocaoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
