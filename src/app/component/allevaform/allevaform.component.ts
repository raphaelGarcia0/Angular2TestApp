import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommanService } from 'src/app/service/comman.service';

@Component({
  selector: 'app-allevaform',
  templateUrl: './allevaform.component.html',
  styleUrls: ['./allevaform.component.scss']
})
export class AllevaformComponent implements OnInit {

  addform !: FormGroup ;
  Alldata:any[]=[]
  constructor(private _commanService: CommanService,private _fb:FormBuilder) { }
  ngOnInit(): void {

    this.setform()
  }


  setform() {
    this.addform = this._fb.group({
      artist: ['',],
      title: ['', ],
      year: ['', ],
    });
  };

  submit(){
    debugger
    this._commanService.post("http://localhost:3000/songs",this.addform?.value).subscribe(res=>{
      console.log(res)
    })
  this.addform.reset()
  }
}
