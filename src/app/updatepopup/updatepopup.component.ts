import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: AuthService, private toastr: ToastrService,
    private dialog: MatDialogRef<UpdatepopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  editdata: any;
  ngOnInit(): void {
    this.service.GelAllRole().subscribe(res => {
      this.rolelist = res;
    })
    if (this.data.usercode != '' && this.data.usercode != null) {
      this.service.GetbyCode(this.data.usercode).subscribe(res => {
        this.editdata = res;
        console.log(this.editdata);
        this.registerform.setValue({
          id: this.editdata.id, name: this.editdata.name,
          password: this.editdata.password, email: this.editdata.email, gender: this.editdata.gender,
          role: this.editdata.role, isactive: this.editdata.isactive
        });
      });
    }
  }
  rolelist: any;


  registerform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control('', Validators.required),
    isactive: this.builder.control(false)
  });

  // loaduserdata(code: any) {
  //   this.service.GetbyCode(code).subscribe(res => {
  //     this.editdata = res;
  //     console.log(this.editdata);
  //     this.registerform.setValue({
  //       id: this.editdata.id, name: this.editdata.name,
  //       password: this.editdata.password, email: this.editdata.email, gender: this.editdata.gender,
  //       role: this.editdata.role, isactive: this.editdata.isactive
  //     });
  //   });
  // }
  updateUser() {
    if (this.registerform.valid) {
      this.service.updateuser(this.registerform.value.id, this.registerform.value).subscribe(res => {
        this.toastr.success('Updated successfully.');
        this.dialog.close();
      });
    }
    else {
      this.toastr.warning('Please select role')
    }

  }

}
