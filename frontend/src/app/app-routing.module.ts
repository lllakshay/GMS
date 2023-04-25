import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddDepartmentComponent } from './components/admin/admin-add-department/admin-add-department.component';
import { AdminAddHodComponent } from './components/admin/admin-add-hod/admin-add-hod.component';
import { AdminDashboardComponent } from './components/admin/admin-department/admin-dashboard.component';
import { AdminEditDepartmentComponent } from './components/admin/admin-edit-department/admin-edit-department.component';
import { AdminEditHodComponent } from './components/admin/admin-edit-hod/admin-edit-hod.component';
import { AdminHodComponent } from './components/admin/admin-hod/admin-hod.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import { AdminUnlockAccountComponent } from './components/admin/admin-unlock-account/admin-unlock-account.component';
import { AdminViewLogComponent } from './components/admin/admin-view-log/admin-view-log.component';
import { AdminViewFeedbackComponent } from './components/admin/admin-view-feedback/admin-view-feedback.component';
import { HodDashboardComponent } from './components/hod/hod-dashboard/hod-dashboard.component';
import { HodUpdatePasswordComponent } from './components/hod/hod-update-password/hod-update-password.component';
import { HodViewComplaintComponent } from './components/hod/hod-view-complaint/hod-view-complaint.component';
import {  HodNavbarComponent } from './components/hod/hod-navbar/hod-navbar.component';
import {  HodViewReminderComponent } from './components/hod/hod-view-reminder/hod-view-reminder.component';
import {  HodTransferComplaintComponent } from './components/hod/hod-transfer-complaint/hod-transfer-complaint.component';
import { HomepageComponent } from './components/miscellaneous/homepage/homepage.component';
import { LoginComponent } from './components/miscellaneous/login/login.component';
import { OtpComponent } from './components/miscellaneous/otp/otp.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { ForgetPasswordComponent } from './components/miscellaneous/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/miscellaneous/reset-password/reset-password.component';
import { MakeComplaintComponent } from './components/citizen/make-complaint/make-complaint.component';
import { ListComplaintsComponent } from './components/citizen/list-complaints/list-complaints.component';
import { HomeComponent } from './components/citizen/home/home.component';
import { SettingsComponent } from './components/citizen/settings/settings.component';
import { RegisterUserComponent } from './components/citizen/register-user/register-user.component';
import { ViewCommentsComponent } from './components/citizen/view-comments/view-comments.component';
import { AboutUsComponent } from './components/miscellaneous/about-us/about-us.component';
import { ContactUsComponent } from './components/miscellaneous/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'admin', component: AdminNavbarComponent },
  { path: 'unlockAccount', component: AdminUnlockAccountComponent },
  {path: 'homepage', component: HomepageComponent},
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'department', component: AdminDashboardComponent },
  { path: 'hod', component: AdminHodComponent},
  { path: 'addHod', component: AdminAddHodComponent },
  { path: 'adminDash', component: AdminDashComponent },
  { path: 'viewLog', component: AdminViewLogComponent },
  { path: 'viewFeedback', component: AdminViewFeedbackComponent },
  { path: 'addDepartment', component: AdminAddDepartmentComponent },
  { path: 'editHod/:id', component: AdminEditHodComponent},
  { path: 'editDepartment/:id', component: AdminEditDepartmentComponent},
  { path: 'viewComplaint', component: HodViewComplaintComponent},
  { path: 'updatePassword', component: HodUpdatePasswordComponent},
  { path: 'hodNav', component: HodNavbarComponent},
  { path: 'hodDash', component: HodDashboardComponent},
  { path: 'transferComplaint/:cid', component: HodTransferComplaintComponent},
  { path: 'viewReminder', component: HodViewReminderComponent},
  { path: 'login', component: LoginComponent},
  { path: 'otp', component: OtpComponent},
  { path: 'forgetPassword', component: ForgetPasswordComponent},
  { path: 'resetPassword', component: ResetPasswordComponent},
  {path:"makeComplaint", component:MakeComplaintComponent},
  {path:"listComplaints", component:ListComplaintsComponent},
  {path:"home", component:HomeComponent},
  {path:"settings", component:SettingsComponent},
  {path:"registerUser", component:RegisterUserComponent},
  {path:"viewComments/:id",component:ViewCommentsComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
