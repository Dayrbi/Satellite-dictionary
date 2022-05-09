export interface Word {
    word: string;
    origin: string;
    phonetics: { [key: string]: string }[];
    meanings: [
      {
        partOfSpeech: string;
        definitions: {
          definition: string;
          example: string;
          synonyms: string[];
          antonyms: string[];
        }[];
      },
    ];
}
