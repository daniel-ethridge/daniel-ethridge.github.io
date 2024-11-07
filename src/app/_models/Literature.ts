export interface Literature {
    title: string,
    year: number,

    month?: number,
    authors?: string[],
    link?: string,
    doi?: string,

    journal_name?: string,
    journal_volume?: string,
    journal_issue?: string,
    journal_pages?: string,

    conference_name?: string,
    conference_series?: string,
    conference_location?: string,
    conference_publisher?: string,
    conference_address?: string,
    conference_pages?: string,

    aims_questions?: string,
    methods?: string,
    results?: string,
    discussion?: string,
    tags?: string[],

    id?: number  // Automatically set. Manually set values in the json fileare overwritten
}

/**
 * Potential later ideas:
 * - create further optional slots for volume, issue, conference name, proceedings, and 
 */