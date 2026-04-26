import type { Schema, Struct } from '@strapi/strapi';

export interface SelecteContente extends Struct.ComponentSchema {
  collectionName: 'components_selecte_contentes';
  info: {
    displayName: 'contente';
    icon: 'check';
  };
  attributes: {};
}

export interface SelecteContenue extends Struct.ComponentSchema {
  collectionName: 'components_selecte_contenues';
  info: {
    displayName: 'contenue';
  };
  attributes: {};
}

export interface SelecteLien extends Struct.ComponentSchema {
  collectionName: 'components_selecte_liens';
  info: {
    displayName: 'lien';
  };
  attributes: {
    annonce: Schema.Attribute.Relation<'oneToOne', 'api::annonce.annonce'>;
  };
}

export interface SelectePhoto extends Struct.ComponentSchema {
  collectionName: 'components_selecte_photos';
  info: {
    displayName: 'photo';
  };
  attributes: {
    photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SelecteText extends Struct.ComponentSchema {
  collectionName: 'components_selecte_texts';
  info: {
    displayName: 'text';
    icon: 'book';
  };
  attributes: {
    annonce: Schema.Attribute.Relation<'oneToOne', 'api::annonce.annonce'>;
    bool: Schema.Attribute.Boolean;
    bool_princpale: Schema.Attribute.Boolean;
    date: Schema.Attribute.DateTime;
    date_debit: Schema.Attribute.DateTime;
    date_fin: Schema.Attribute.DateTime;
    email: Schema.Attribute.Email;
    enum_type: Schema.Attribute.Enumeration<['gauche', 'droite']>;
    json: Schema.Attribute.JSON;
    media_principale: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    media_secondaire: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    numbre_decimal: Schema.Attribute.Decimal;
    numbre_entier: Schema.Attribute.Integer;
    passe_word: Schema.Attribute.Password;
    riche_marck: Schema.Attribute.RichText;
    riche_text: Schema.Attribute.Blocks;
    single_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitre: Schema.Attribute.String;
    titre: Schema.Attribute.String;
  };
}

export interface SelecteVideo extends Struct.ComponentSchema {
  collectionName: 'components_selecte_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'selecte.contente': SelecteContente;
      'selecte.contenue': SelecteContenue;
      'selecte.lien': SelecteLien;
      'selecte.photo': SelectePhoto;
      'selecte.text': SelecteText;
      'selecte.video': SelecteVideo;
    }
  }
}
