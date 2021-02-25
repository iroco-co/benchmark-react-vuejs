export interface EmailAddress {
  name: string | null;
  email: string | null;
}

export enum MimeType {
  TEXT_HTML = "text/html",
  TEXT_PLAIN = "text/plain",
  MESSAGE_RFC822 = "message/rfc822",
  MULTIPART_DIGEST = "multipart/digest",
}

export interface HtmlBodyPart {
  partId: string;
  type: MimeType;
}

export interface BodyValue {
  value: string;
}

export interface BodyValues {
  [key: string]: BodyValue;
}

export default interface Mail {
  id: string;
  from?: EmailAddress | null;
  subject?: string;
  receivedAt?: string | null;
  htmlBody?: HtmlBodyPart[];
  bodyValues?: BodyValues;
}
