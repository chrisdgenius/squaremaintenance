import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMaterialModule } from './ng-material/ng-material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';

import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { ExcerptPipe } from './customPipes/excerpt.pipe';
import { SlugPipe } from './customPipes/slug.pipe';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogComponent } from './components/blog/blog.component';

import { PaginatorComponent } from './components/paginator/paginator.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthorProfileComponent } from './components/author-profile/author-profile.component';
import { ScrollerComponent } from './components/scroller/scroller.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ShareButtonsConfig, ShareModule } from '@ngx-share/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { SocialShareComponent } from './components/social-share/social-share.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

const customConfig: ShareButtonsConfig = {
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BlogEditorComponent,
    ExcerptPipe,
    SlugPipe,
    BlogCardComponent,
    BlogComponent,
    PaginatorComponent,
    AuthorProfileComponent,
    ScrollerComponent,
    CommentsComponent,
    SocialShareComponent



  ],
  imports: [

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxPaginationModule,

    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    NgMaterialModule,
    HttpClientModule,
    FontAwesomeModule,

    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,


    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      //{ path: "**", component: HomeComponent },
      //  { path: 'addpost', component: HomeComponent },
      // { path: 'addpost', component: BlogEditorComponent },
      { path: 'addpost', component: BlogEditorComponent, canActivate: [AuthGuard] },
      { path: 'blog/:id/:slug', component: BlogComponent },
      // { path: 'editpost/:id', component: BlogEditorComponent },
      { path: 'editpost/:id', component: BlogEditorComponent, canActivate: [AdminAuthGuard] },
      { path: 'page/:pagenum', component: HomeComponent },
      { path: 'page/:pagenum', component: HomeComponent },
    ]),



    CKEditorModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
