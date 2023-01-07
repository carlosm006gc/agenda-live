import { SafeResourceUrl } from '@angular/platform-browser';

export class Live {
    id: string;
    liveName: string;
    private _channelName: string;
    public get channelName(): string {
        return this._channelName;
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    liveDate: string;
    liveTime: string;
    liveLink: string;
    registrationDate: string;
    urlSafe: SafeResourceUrl;
}