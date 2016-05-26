import Deliverer from './deliverer';
import S3Source from './sources/s3Source';
import FileSystemSource from './sources/fileSystemSource';
import SESEmailDestination from './destinations/sesEmailDestination';
import S3Destination from './destinations/s3Destination';

export default {
  Deliverer,
  S3Source,
  FileSystemSource,
  SESEmailDestination,
  S3Destination
};

export { Deliverer };
export { S3Source };
export { FileSystemSource };
export { SESEmailDestination };
export { S3Destination };

const deliverer = new Deliverer;
