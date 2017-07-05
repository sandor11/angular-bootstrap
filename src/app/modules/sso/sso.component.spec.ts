import { TestBed, async } from '@angular/core/testing';
import { MdInputModule } from '@angular/material';
import { SSOComponent } from './sso.component';

describe('SSOComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SSOComponent
      ],
      imports: [
        MdInputModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SSOComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
