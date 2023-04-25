import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AdminDashboardComponent } from './components/admin/admin-department/admin-dashboard.component';
import { AdminHodComponent } from './components/admin/admin-hod/admin-hod.component';
import { AdminAddHodComponent } from './components/admin/admin-add-hod/admin-add-hod.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms'; 
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {AdminAddDepartmentComponent } from './components/admin/admin-add-department/admin-add-department.component';
import {AdminUnlockAccountComponent } from './components/admin/admin-unlock-account/admin-unlock-account.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AdminEditHodComponent } from './components/admin/admin-edit-hod/admin-edit-hod.component';
import { AdminEditDepartmentComponent } from './components/admin/admin-edit-department/admin-edit-department.component';
import { LoginComponent } from './components/miscellaneous/login/login.component';
import { HodNavbarComponent } from './components/hod/hod-navbar/hod-navbar.component';
import { HodViewComplaintComponent } from './components/hod/hod-view-complaint/hod-view-complaint.component';
import { HodUpdatePasswordComponent } from './components/hod/hod-update-password/hod-update-password.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { HodDashboardComponent } from './components/hod/hod-dashboard/hod-dashboard.component';
import { HomepageComponent } from './components/miscellaneous/homepage/homepage.component';
import { AdminViewLogComponent } from './components/admin/admin-view-log/admin-view-log.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OtpComponent } from './components/miscellaneous/otp/otp.component';
import { HodViewReminderComponent } from './components/hod/hod-view-reminder/hod-view-reminder.component';
import { HodTransferComplaintComponent } from './components/hod/hod-transfer-complaint/hod-transfer-complaint.component';
import { AdminViewFeedbackComponent } from './components/admin/admin-view-feedback/admin-view-feedback.component';
import { SidenavComponent } from './components/miscellaneous/sidenav/sidenav.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { ForgetPasswordComponent } from './components/miscellaneous/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/miscellaneous/reset-password/reset-password.component';











import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';

import { MakeComplaintComponent } from './components/citizen/make-complaint/make-complaint.component';
import { ListComplaintsComponent } from './components/citizen/list-complaints/list-complaints.component';

import { MatNativeDateModule } from '@angular/material/core';



import { HomeComponent } from './components/citizen/home/home.component';

import { SettingsComponent } from './components/citizen/settings/settings.component';
import { RegisterUserComponent } from './components/citizen/register-user/register-user.component';
import { ViewCommentsComponent } from './components/citizen/view-comments/view-comments.component';
import { CitizenNavbarComponent } from './components/citizen/citizen-navbar/citizen-navbar.component';
import { CitizenFeedbackComponent } from './components/citizen/citizen-feedback/citizen-feedback.component';
import { AboutUsComponent } from './components/miscellaneous/about-us/about-us.component';
import { ContactUsComponent } from './components/miscellaneous/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'






// import { ChartsModule } from 'ng2-charts';
// import {Chart} from 'chart.js';


@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminHodComponent,
    AdminAddHodComponent,
    AdminAddDepartmentComponent,
    AdminUnlockAccountComponent,
    AdminEditHodComponent,
    AdminEditDepartmentComponent,
    LoginComponent,
    HodNavbarComponent,
    HodViewComplaintComponent,
    HodUpdatePasswordComponent,
    HodDashboardComponent,
    HomepageComponent,
    AdminViewLogComponent,
    OtpComponent,
    HodViewReminderComponent,
    HodTransferComplaintComponent,
    AdminViewFeedbackComponent,
    SidenavComponent,
    AdminDashComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
   
    
    
    MakeComplaintComponent,
    ListComplaintsComponent,
    HomeComponent,
    SettingsComponent,
    RegisterUserComponent,
    ViewCommentsComponent,
    CitizenNavbarComponent,
    CitizenFeedbackComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatNativeDateModule,
    NgbModule,
    NgxCaptchaModule,
    
    // ChartsModule,
    // Chart
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
