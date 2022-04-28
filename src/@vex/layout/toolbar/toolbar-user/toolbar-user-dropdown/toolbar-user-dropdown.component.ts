import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icListAlt from '@iconify/icons-ic/twotone-list-alt';
import icLock from '@iconify/icons-ic/twotone-lock';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';
import icPerson from '@iconify/icons-ic/twotone-person';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icVerifiedUser from '@iconify/icons-ic/twotone-verified-user';
import { Icon } from '@visurel/iconify-angular';
import { Security } from 'src/app/utils/secutiry.utils';
import { PopoverRef } from '../../../../components/popover/popover-ref';
import { trackById } from '../../../../utils/track-by';
import { MenuItem } from '../interfaces/menu-item.interface';

export interface OnlineStatus {
  id: 'online' | 'away' | 'dnd' | 'offline';
  label: string;
  icon: Icon;
  colorClass: string;
}

@Component({
  selector: 'vex-toolbar-user-dropdown',
  templateUrl: './toolbar-user-dropdown.component.html',
  styleUrls: ['./toolbar-user-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserDropdownComponent implements OnInit {

  items: MenuItem[] = [
    {
      id: '1',
      icon: icListAlt,
      label: 'Painel',
      description: 'Informações da agenda',
      colorClass: 'text-teal',
      route: '/painel'
    }
  ];

  statuses: OnlineStatus[] = [];
  /*
  [
    {
      id: 'online',
      label: 'Online',
      icon: icCheckCircle,
      colorClass: 'text-green'
    },
    {
      id: 'away',
      label: 'Away',
      icon: icAccessTime,
      colorClass: 'text-orange'
    },
    {
      id: 'dnd',
      label: 'Do not disturb',
      icon: icDoNotDisturb,
      colorClass: 'text-red'
    },
    {
      id: 'offline',
      label: 'Offline',
      icon: icOfflineBolt,
      colorClass: 'text-gray'
    }
  ]
   */

  activeStatus: OnlineStatus = this.statuses[0];

  trackById = trackById;
  icPerson = icPerson;
  icSettings = icSettings;
  icChevronRight = icChevronRight;
  icArrowDropDown = icArrowDropDown;
  icBusiness = icBusiness;
  icVerifiedUser = icVerifiedUser;
  icLock = icLock;
  icNotificationsOff = icNotificationsOff;
  userName = "";

  constructor(private router: Router, private cd: ChangeDetectorRef,
    private popoverRef: PopoverRef<ToolbarUserDropdownComponent>) { }

  ngOnInit() {
    let user = Security.getUser();
    this.userName = user.paciente.nome ?? "";
  }

  setStatus(status: OnlineStatus) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }

  close() {
    Security.clear();
    this.popoverRef.close();
    this.router.navigate(['/']);
  }
}
