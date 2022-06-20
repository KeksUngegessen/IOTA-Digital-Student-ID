import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIdentityPageComponent } from './my-identity-page.component';

describe('MyIdentityPageComponent', () => {
  let component: MyIdentityPageComponent;
  let fixture: ComponentFixture<MyIdentityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyIdentityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIdentityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
