import type { Schema, Attribute } from '@strapi/strapi';

export interface OtherContact extends Schema.Component {
  collectionName: 'components_other_contacts';
  info: {
    displayName: 'contact';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['phone', 'telegram', 'whatsapp', 'mail']>;
    value: Attribute.String;
  };
}

export interface OtherHeader extends Schema.Component {
  collectionName: 'components_other_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface OtherItemCard extends Schema.Component {
  collectionName: 'components_other_item_cards';
  info: {
    displayName: 'itemCard';
  };
  attributes: {
    item: Attribute.Relation<'other.item-card', 'oneToOne', 'api::item.item'>;
  };
}

export interface OtherJobCard extends Schema.Component {
  collectionName: 'components_other_job_cards';
  info: {
    displayName: 'JobCard';
  };
  attributes: {
    job: Attribute.Relation<'other.job-card', 'oneToOne', 'api::job.job'>;
  };
}

export interface OtherRealEstateCard extends Schema.Component {
  collectionName: 'components_other_real_estate_cards';
  info: {
    displayName: 'realEstateCard';
  };
  attributes: {
    realEstate: Attribute.Relation<
      'other.real-estate-card',
      'oneToOne',
      'api::real-estate.real-estate'
    >;
  };
}

export interface OtherSteps extends Schema.Component {
  collectionName: 'components_other_steps';
  info: {
    displayName: 'steps';
    description: '';
  };
  attributes: {
    step1: Attribute.Text & Attribute.Required;
    step2: Attribute.Text & Attribute.Required;
    step3: Attribute.Text & Attribute.Required;
    step4: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'other.contact': OtherContact;
      'other.header': OtherHeader;
      'other.item-card': OtherItemCard;
      'other.job-card': OtherJobCard;
      'other.real-estate-card': OtherRealEstateCard;
      'other.steps': OtherSteps;
    }
  }
}
