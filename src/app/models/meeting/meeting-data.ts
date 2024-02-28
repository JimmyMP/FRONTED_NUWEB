export class Meeting {
    id: number=0;
    area: number=0;
    meeting: string = '';
    integration: string = '';
    participation: string = '';
}
export class MeetingImage{
    id_synergy: number=0;
    metting_image: string = '';
    integration_image: string = '';
    participation_image: string = '';
}
export class CombinedMeeting {
    id: number = 0;
    area: number = 0;
    meeting: string = '';
    integration: string = '';
    participation: string = '';
    meeting_Image: string = '';
    integration_Image: string = '';
    participation_Image: string = '';
}