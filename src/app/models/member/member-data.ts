export class Member {
    id: number=0;
    name: string = ''; // Valor inicial, podrías asignar el valor que desees
    position: string = '';
    info: string = '';
    social_network: {
        facebook: string | null,
        linkedin: string | null,
        other: string | null
    } = {
        facebook: null,
        linkedin: null,
        other: null
    };
    photo: string = '';
    area_member: string = ''
}
