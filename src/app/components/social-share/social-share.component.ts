import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { iconpack } from 'src/icons';
 import { ShareService } from '@ngx-share/core';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent {

fbIcon = faFacebookSquare;
pinIcon = faPinterest;
tweetIcon = faTwitterSquare;
name = 'ngx-sharebuttons';
//share: any;

}
