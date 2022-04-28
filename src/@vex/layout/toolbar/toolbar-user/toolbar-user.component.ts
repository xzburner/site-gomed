import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import icPerson from '@iconify/icons-ic/twotone-person';
import { Security } from 'src/app/utils/secutiry.utils';
import { PopoverService } from '../../../components/popover/popover.service';
import { ToolbarUserDropdownComponent } from './toolbar-user-dropdown/toolbar-user-dropdown.component';

@Component({
  selector: 'vex-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserComponent implements OnInit {

  dropdownOpen: boolean;
  icPerson = icPerson;
  userName = "";

  constructor(private router: Router, private popover: PopoverService,
    private cd: ChangeDetectorRef, private snackBar: MatSnackBar,) { }

  ngOnInit() {
    let user = Security.getUser();
    this.userName = user.paciente.nome ?? "";
  }

  logoff() {
    Security.clear();
    this.snackBar.open("Logout realizado com sucesso!", "Fechar", {
      duration: 10000,
    });
    window.location.reload();
    this.router.navigate(['/']);
  }

  showPopover(originRef: HTMLElement) {
    this.dropdownOpen = true;
    this.cd.markForCheck();

    const popoverRef = this.popover.open({
      content: ToolbarUserDropdownComponent,
      origin: originRef,
      offsetY: 12,
      position: [
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]
    });

    popoverRef.afterClosed$.subscribe(() => {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    });
  }
}
