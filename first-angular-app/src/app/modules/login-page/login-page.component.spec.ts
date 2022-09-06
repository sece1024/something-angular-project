import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginPageComponent} from './login-page.component';
import {User} from "../../user";
import {UserService} from "../../services/user.service";
import {ReactiveFormsModule} from "@angular/forms";

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let mockUserService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      providers: [UserService],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockUserService = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render login component', function () {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('Username:');
  });

  it('should not verify when user not exists', function () {
    spyOn(mockUserService, 'getUsers').and.returnValue([new User('user-1', 'pwd-1'), new User('user-2', 'pwd-2')]);
    expect(component.verifyUser('none1', 'none1')).toBe(false);
  });

  it('should verify when user exist', function () {
    spyOn(mockUserService, 'getUsers').and.returnValue([new User('user-1', 'pwd-1'), new User('user-2', 'pwd-2')]);
    expect(component.verifyUser('user-2', 'pwd-2')).toBe(true);
  });
});
