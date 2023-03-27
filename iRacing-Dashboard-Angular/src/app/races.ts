export interface Races {
    races:   Race[];
    cust_id: number;
}

export interface Race {
    season_id:            number;
    series_id:            number;
    series_name:          string;
    car_id:               number;
    car_class_id:         number;
    livery:               Livery;
    license_level:        number;
    session_start_time:   string;
    winner_group_id:      number;
    winner_name:          string;
    winner_helmet:        WinnerHelmet;
    winner_license_level: number;
    start_position:       number;
    finish_position:      number;
    qualifying_time:      number;
    laps:                 number;
    laps_led:             number;
    incidents:            number;
    club_points:          number;
    points:               number;
    strength_of_field:    number;
    subsession_id:        number;
    old_sub_level:        number;
    new_sub_level:        number;
    oldi_rating:          number;
    newi_rating:          number;
    track:                Track;
}

export interface Livery {
    car_id:  number;
    pattern: number;
    color1:  Color1;
    color2:  Color;
    color3:  Color;
}

export enum Color1 {
    Color10F113D = "0F113D",
    The0F113D = "0f113d",
}

export enum Color {
    A76301 = "a76301",
    ColorA76301 = "A76301",
    ColorFf8014 = "ff8014",
    Ff8014 = "FF8014",
}

export interface Track {
    track_id:   number;
    track_name: string;
}

export interface WinnerHelmet {
    pattern:     number;
    color1:      string;
    color2:      string;
    color3:      string;
    face_type:   number;
    helmet_type: number;
}
