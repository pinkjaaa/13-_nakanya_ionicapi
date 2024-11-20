import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  member:any=[];
  id:any;
  id_stu:any;
  name:any;
  nname:any;
  age:any;
  phone:any;
  address:any;
  status:any;

  constructor(
    public dataapi:DataapiService,
    private route:Router,
  ) { }

  ngOnInit() {
    this.member = this.dataapi.data_detailMen;
  }

  editMember(){
    let dataEdit ={
      id:this.member.id,
      id_stu:this.member.id_stu,
      name:this.member.name,
      nname:this.member.nname,
      age:this.member.age,
      phone:this.member.phone,
      address:this.member.address,
      status:this.member.status
      
    };
    
    this.dataapi.editMember(dataEdit).subscribe({
      next:(res:any)=>{
        console.log('เเก้ไขข้อมูลสำเร็จ',res);
      },
      error:(error:any)=>{
        console.log('ไม่สามารถเเก้ไขข้อมูลได้',error);
      }
    });


  }

}
