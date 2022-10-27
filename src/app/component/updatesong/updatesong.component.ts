import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommanService } from 'src/app/service/comman.service';

@Component({
  selector: 'app-updatesong',
  templateUrl: './updatesong.component.html',
  styleUrls: ['./updatesong.component.scss']
})
export class UpdatesongComponent implements OnInit {

  Editform !: FormGroup ;
  Alldata:any[]=[]
  constructor(private _commanService: CommanService,private _fb:FormBuilder,private router:ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.setform()
  }


  setform() {
    this._commanService.getcurrent("http://localhost:3000/songs/",this.router.snapshot.params['id']).subscribe(res=>{
      debugger
      console.log(res)
      this.Editform = this._fb.group({
          artist: [res['artist']],
          title: [res['title']],
          year: [res['year']],
        });
    })
  };

  update(){
  console.log(this.Editform.value)
  this._commanService.update("http://localhost:3000/songs/",this.router.snapshot.params['id'],this.Editform.value).subscribe(res=>{
    console.log(res)
  })
  }

}
