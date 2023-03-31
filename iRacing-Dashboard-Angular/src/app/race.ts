export interface RaceDetails {
    subsession_id:             number;
    season_id:                 number;
    season_name:               string;
    season_short_name:         string;
    season_year:               number;
    season_quarter:            number;
    series_id:                 number;
    series_name:               string;
    series_short_name:         string;
    series_logo:               string;
    race_week_num:             number;
    session_id:                number;
    license_category_id:       number;
    license_category:          string;
    private_session_id:        number;
    start_time:                string;
    end_time:                  string;
    num_laps_for_qual_average: number;
    num_laps_for_solo_average: number;
    corners_per_lap:           number;
    caution_type:              number;
    event_type:                number;
    event_type_name:           string;
    driver_changes:            boolean;
    min_team_drivers:          number;
    max_team_drivers:          number;
    driver_change_rule:        number;
    driver_change_param1:      number;
    driver_change_param2:      number;
    max_weeks:                 number;
    points_type:               string;
    event_strength_of_field:   number;
    event_average_lap:         number;
    event_laps_complete:       number;
    num_cautions:              number;
    num_caution_laps:          number;
    num_lead_changes:          number;
    official_session:          boolean;
    heat_info_id:              number;
    special_event_type:        number;
    damage_model:              number;
    can_protest:               boolean;
    cooldown_minutes:          number;
    limit_minutes:             number;
    track:                     Track;
    weather:                   Weather;
    track_state:               TrackState;
    session_results:           SessionResult[];
    race_summary:              RaceSummary;
    car_classes:               CarClass[];
    allowed_licenses:          AllowedLicense[];
    results_restricted:        boolean;
    associated_subsession_ids: number[];
}

export interface AllowedLicense {
    parent_id:         number;
    license_group:     number;
    min_license_level: number;
    max_license_level: number;
    group_name:        string;
}

export interface CarClass {
    car_class_id:  number;
    cars_in_class: CarsInClass[];
    name:          Name;
    short_name:    Name;
}

export interface CarsInClass {
    car_id: number;
}

export enum Name {
    FormulaVee = "Formula Vee",
}

export interface RaceSummary {
    subsession_id:           number;
    average_lap:             number;
    laps_complete:           number;
    num_cautions:            number;
    num_caution_laps:        number;
    num_lead_changes:        number;
    field_strength:          number;
    num_opt_laps:            number;
    has_opt_path:            boolean;
    special_event_type:      number;
    special_event_type_text: string;
}

export interface SessionResult {
    simsession_number:    number;
    simsession_type:      number;
    simsession_type_name: string;
    simsession_subtype:   number;
    simsession_name:      string;
    results:              Result[];
}

export interface Result {
    cust_id:                    number;
    display_name:               string;
    finish_position:            number;
    finish_position_in_class:   number;
    laps_lead:                  number;
    laps_complete:              number;
    opt_laps_complete:          number;
    interval:                   number;
    class_interval:             number;
    average_lap:                number;
    best_lap_num:               number;
    best_lap_time:              number;
    best_nlaps_num:             number;
    best_nlaps_time:            number;
    best_qual_lap_at:           string;
    best_qual_lap_num:          number;
    best_qual_lap_time:         number;
    reason_out_id:              number;
    reason_out:                 ReasonOut;
    champ_points:               number;
    drop_race:                  boolean;
    club_points:                number;
    position:                   number;
    qual_lap_time:              number;
    starting_position:          number;
    starting_position_in_class: number;
    car_class_id:               number;
    car_class_name:             Name;
    car_class_short_name:       Name;
    club_id:                    number;
    club_name:                  string;
    club_shortname:             string;
    division:                   number;
    division_name:              DivisionName;
    old_license_level:          number;
    old_sub_level:              number;
    old_cpi:                    number;
    oldi_rating:                number;
    old_ttrating:               number;
    new_license_level:          number;
    new_sub_level:              number;
    new_cpi:                    number;
    newi_rating:                number;
    new_ttrating:               number;
    multiplier:                 number;
    license_change_oval:        number;
    license_change_road:        number;
    incidents:                  number;
    max_pct_fuel_fill:          number;
    weight_penalty_kg:          number;
    league_points:              number;
    league_agg_points:          number;
    car_id:                     number;
    car_name:                   Name;
    aggregate_champ_points:     number;
    livery:                     Livery;
    suit:                       Suit;
    helmet:                     Helmet;
    watched:                    boolean;
    friend:                     boolean;
    ai:                         boolean;
}

export enum DivisionName {
    BlueDivision = "Blue Division",
    BronzeDivision = "Bronze Division",
    RedDivision = "Red Division",
    RookieDivision = "Rookie Division",
    YellowDivision = "Yellow Division",
}

export interface Helmet {
    pattern:     number;
    color1:      string;
    color2:      string;
    color3:      string;
    face_type:   number;
    helmet_type: number;
}

export interface Livery {
    car_id:        number;
    pattern:       number;
    color1:        string;
    color2:        string;
    color3:        string;
    number_font:   number;
    number_color1: NumberColor1;
    number_color2: string;
    number_color3: string;
    number_slant:  number;
    sponsor1:      number;
    sponsor2:      number;
    car_number:    string;
    wheel_color:   null;
    rim_type:      number;
}

export enum NumberColor1 {
    Ffffff = "FFFFFF",
    NumberColor1Ffffff = "ffffff",
}

export enum ReasonOut {
    Disconnected = "Disconnected",
    Running = "Running",
}

export interface Suit {
    pattern: number;
    color1:  string;
    color2:  string;
    color3:  string;
}

export interface Track {
    track_id:    number;
    track_name:  string;
    config_name: string;
    category_id: number;
    category:    string;
}

export interface TrackState {
    leave_marbles:          boolean;
    practice_rubber:        number;
    qualify_rubber:         number;
    warmup_rubber:          number;
    race_rubber:            number;
    practice_grip_compound: number;
    qualify_grip_compound:  number;
    warmup_grip_compound:   number;
    race_grip_compound:     number;
}

export interface Weather {
    version:                    number;
    type:                       number;
    temp_units:                 number;
    temp_value:                 number;
    rel_humidity:               number;
    fog:                        number;
    wind_dir:                   number;
    wind_units:                 number;
    wind_value:                 number;
    skies:                      number;
    weather_var_initial:        number;
    weather_var_ongoing:        number;
    allow_fog:                  boolean;
    track_water:                number;
    precip_option:              number;
    time_of_day:                number;
    simulated_start_utc_time:   string;
    simulated_start_utc_offset: number;
}

