import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommanService } from 'src/app/service/comman.service';


@Component({
  selector: 'app-allevasong',
  templateUrl: './allevasong.component.html',
  styleUrls: ['./allevasong.component.scss']
})
export class AllevasongComponent implements OnInit {
  addform: FormGroup | undefined;
  Alldata:any[]=[]
  constructor(private _commanService: CommanService,private _fb:FormBuilder) { }
  ngOnInit(): void {
    this.getdata()
  }

  getdata() {
  this._commanService.get("http://localhost:3000/songs").subscribe(res=>{
    console.log(res)
    this.Alldata=res
  
  })
}

submit(){
  debugger
  this._commanService.post("http://localhost:3000/songs",this.addform?.value).subscribe(res=>{
    console.log(res)
  })
}

Delete(_id:any){
  this._commanService.delete("http://localhost:3000/songs/",_id).subscribe(res=>{
    console.log(res)
    this.getdata()
  })
}

update(u_id:any){
console.log(u_id)
}
}
