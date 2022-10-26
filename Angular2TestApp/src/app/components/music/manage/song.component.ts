import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, tap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/common/base.component';
import { SongModel } from 'src/app/shared/models/song.model';
import { SongService } from 'src/app/shared/services/songs.service';
import { AlertifyService } from 'src/app/shared/services/common/alertify.service';
import { BroadcastService } from 'src/app/shared/services/common/broadcast.service';
import { RouteService } from 'src/app/shared/services/common/route.service';

@Component({
    selector: 'song',
    templateUrl: './song.component.html'
})
export class SongComponent implements AfterViewInit, OnInit {
    public songForm: FormGroup;
    public isMobile = false;
    public isTablet = false;
    public isDesktopDevice = false;
    public recordid = 0;
    public editSong: SongModel = Object.create(null);
    public minDate = new Date();
    @ViewChild('title') title: ElementRef = Object.create(ElementRef);
    public loading = false;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formbulider: FormBuilder,
        private songService: SongService,
        private alertService: AlertifyService) {
        this.recordid = this.route.snapshot.params['recordid'];
        this.songForm = this.formbulider.group({
            id: [0],
            title: ['', Validators.compose([Validators.required])],
            year: [new Date().getFullYear(), Validators.compose([Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
            artist: ['', Validators.compose([Validators.required])]
        });
    }

    public ngOnInit() {
        this.loading = true;
        if (this.recordid > 0) {
            this.editSong = this.songService.get(this.recordid);
            this.songForm.patchValue(this.editSong);
            this.loading = false;
        }
        else {
            this.loading = false;
        }
    }

    public ngAfterViewInit() {

    }

    public onFormSubmit() {
        if (this.songForm.invalid)
            return;

        const id = this.songForm.getRawValue().id;
        this.loading = true;
        if (id === null || id === 0) {
            this.songForm.patchValue({
                id: this.randomNumber()
            });
            this.songService.create(this.songForm.getRawValue());
            this.alertService.success("Song created successfully!");
            this.router.navigate(['/']);
        }
        else {
            // Update
            let updForm = {
                id: id,
                year: parseInt(this.songForm.value.year),
                artist: this.songForm.value.artist,
                title: this.songForm.value.title
            };
            this.songService.update(updForm);
            this.alertService.success("Song updated successfully!");
            this.router.navigate(['/']);
        }
        this.loading = false;
    }

    public removeSpacesFromTextbox($event: ClipboardEvent) {
        $event.preventDefault();
        let clipboardData = $event.clipboardData;
        if (clipboardData) {
            let pastedText = clipboardData.getData("text");
            if (pastedText) {
                this.songForm.patchValue({
                    year: pastedText.split(" ").join("")
                });
            }
        }
    }

    public randomNumber() {
        return Math.round(Math.random() * (10000 - 1) + 1);
    }
}
