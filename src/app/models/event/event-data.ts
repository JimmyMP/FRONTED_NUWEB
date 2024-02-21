export class Event {
    type_event: string = "";
    start_date: string = "";
    end_date: string = "";
    name: string = "";
    description: string = "";
    targets: string = "";
    registration_link: string = "";
    sponsors: string[]=[];
    social_network: {
        facebook: string | null;
        linkedin: string | null;
        other: string | null;
    } = {
        facebook: null,
        linkedin: null,
        other: null
    };
    project_area: string[] = [];
    image: string = "";
    is_event: boolean = true;
}
export class Sponsor{
    name: string = "";
    logo: string = "";
}
