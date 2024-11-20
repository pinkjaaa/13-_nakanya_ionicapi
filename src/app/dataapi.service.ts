import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    public http:HttpClient,
  ) { }

  // ประกาศตัวแปรฟังก์ชั่นสำหรับดึงข้อมูลจาก API
  data_detailMen:any=[];

  // ฟังก์ชั่นการเพิ่มข้อมูลที่ส่งไปยัง API
  addData(data:any){
    return this.http.post('http://localhost/pokpong-24/api/insert.php',data);
  }

  //ฟังชั้นดึงข้อมูลมาจาก API
listMember(){
  return this.http.get('http://localhost/pokpong-24/api/listmember.php')
}

  // ฟังชั่นการเเก้ไขข้อมูล
  editMember (dataEdit:any){
    return this.http.put('http://localhost/pokpong-24/api/update.php',dataEdit);
  }

  //สร้างสำหรับการลบ ข้อมูล
  delMember(id:any){
    // console.log();
    return this.http.delete('http://localhost/pokpong-24/api/delete.php?id='+id);

  }

}