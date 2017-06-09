import { ViewChild, ViewChildren, Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'camera-dialog',
    templateUrl: '../html/camera-dialog.component.html'
})

export class CameraDialog implements OnInit {

    @ViewChild('inputVideo') inputVideo: any;
    @ViewChild('snap') snap: any;
    @ViewChild('canvas') canvas: any;

    mediaStream: any;
    photoTaken: boolean = false;

    constructor() { }
    ngOnInit() {
        this.photoTaken = false;
        let video = this.inputVideo.nativeElement;
        let n = <any>navigator;
        n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
        n.mediaDevices.getUserMedia({
            video: {
                facingMode: { exact: "environment" }
            }
        }).then((stream) => {
            video.src = window.URL.createObjectURL(stream);
            video.play();
            this.mediaStream = stream.getTracks()[0];
        }).catch(() => window.alert("Sorry! Something went wrong!"));
    }

    stopVideo() {
        this.mediaStream.stop();
    }

    snapPic() {
        this.photoTaken = true;
        let img = this.snap.nativeElement;
        let canvas = this.canvas.nativeElement;
        let video = this.inputVideo.nativeElement;
        let context;
        let width = video.offsetWidth
            , height = video.offsetHeight;
        canvas.width = width;
        canvas.height = height;

        context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, width, height);

        img.src = canvas.toDataURL('image/png');
        this.mediaStream.stop();
        video.style.display = 'none';
    };
}

