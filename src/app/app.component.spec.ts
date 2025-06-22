import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Calculator } from './calculator';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the title "pruebasUnitarias"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebasUnitarias');
  });

  it('should render title in h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, pruebasUnitarias');
  });

  it('should display the congratulation message', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Congratulations! Your app is running');
  });

  it('should contain the Angular logo in an svg element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.angular-logo')).toBeTruthy();
  });

  it('should have at least 5 links in the resources section', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const pills = compiled.querySelectorAll('.pill-group .pill');
    expect(pills.length).toBeGreaterThanOrEqual(5);
  });

  it('should have a router-outlet present', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should use Calculator to multiply numbers', () => {
    const calculator = new Calculator();
    const result = calculator.multiply(5, 2);
    expect(result).toBe(10);
  });

  it('should use Calculator to return null on division by zero', () => {
    const calculator = new Calculator();
    const result = calculator.divide(10, 0);
    expect(result).toBeNull();
  });

  it('should have a pill-group container', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const group = compiled.querySelector('.pill-group');
    expect(group).toBeTruthy();
  });

  it('should have a link with text "Angular Docs"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('.pill-group a');
    expect(link?.textContent).toContain('Angular Docs');
  });

  it('should have at least one svg element for the Angular logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const svg = compiled.querySelectorAll('svg');
    expect(svg.length).toBeGreaterThanOrEqual(1);
  });

  it('title should start with "Hello"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const titleText = compiled.querySelector('h1')?.textContent ?? '';
    expect(titleText.trim().startsWith('Hello')).toBeTrue();
  });

  it('all links in the pill-group should have class "pill"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.pill-group a');
    links.forEach(link => {
      expect(link.classList).toContain('pill');
    });
  });
});
