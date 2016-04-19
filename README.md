# asset-delivery-service  [![Build Status](https://travis-ci.com/CrossLead/asset-delivery-service.svg?token=EhYCsjbBHbajxqwL7UDU&branch=master)](https://travis-ci.com/CrossLead/asset-delivery-service)
Deliver screenshots from a source to a destination

## Example Usage

Example sending filesystem asset to an email
```javascript
import ADS from 'assetDeliveryService';

const deliverer = new ADS.Deliverer;
const file = new ADS.FileSystemSource('/path/to/file');
const email = new ADS.SESEmailDestination({ awsKey, awsSecret, awsRegion });

// Setup email
email.setToAddress('foo@bar.com');
email.setFromAddress('no-reply@domain.com');
email.setMessageSubject(`run result for ${run.id}`);

// Add delivery assets
deliverer.addDest(email);
deliverer.addSrc(file);

// Send
deliverer.send();

```


## API 

### Deliverer - The delivery object that pushes sources to destinations

```javascript
import ADS from 'assetDeliveryService';

const deliverer = new ADS.Deliverer(sources, destinations);
```

#### Constuctor Arguments

* sources - collection of sources

* destinations - collection of destinations

#### Methods

* `#send` - Asynchronously send all sources to all destinations

* `#setSrc` (alias setSource) - Set the sources collection

```javascript
deliverer.setSrc(new FileSystemSource('/path/to/file'));
```

* `#addSrc` (alias addSource) - Add a source to the sources collection

```javascript
deliverer.addSrc(new FileSystemSource('/path/to/file'));
```

* `#setDest` (alias setDestination) - Set the destinations collection

```javascript
deliverer.setDest(new SESEmailDestination({ ... }));
```

* `#addDest` (alias addDestination) - Add a destination to the destinations colllection

```javascript
deliverer.addDest(new SESEmailDestination({ ... }));
```

### FileSystemSource - A file system asset to push to a destination

```javascript
import ADS from 'assetDeliveryService';
// or import { FileSystemSource } from 'assetDeliveryService';

const fsSource = new ADS.FileSystemSource('/path/to/source');
```

#### Constructor Arguments

* path (_required_) - A valid path to a file system source
  
  NOTE: Throws if path is invalid

#### Methods

* `#getAssets` - Get the source assets to push to a destination
  
  Returns `fs.ReadStream`

```javascript
await fsSource.getAssets();
```

### S3Source

#### To Be Implemented

### SESEmailDestination - An email destination using Amazon SES

```javascript
import ADS from 'assetDeliveryService';

const accessKeyId = 'foo1bar';
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = 'us-east';
const email = new ADS.SESEmailDestination({ accessKeyId, secretAccessKey, region });
```

#### Constructor Arguments

* awsCredentials (_required_) - Credentials object that includes accessKeyId, secretAccessKey, and region
  
    NOTE: Throws if credentials object is not present

#### Methods

* `#send` - Asynchronously sends a source 

```javascript
email.send(await new FileSystemSource('/path/to/file'));
```

* `#setToAddress` - Set the email destination address

```javascript
email.setToAddress('foo@bar.com');
```

* `#setFromAddress` - Set the email sender address

```javascript
email.setFromAddress('no-reply@domain.com');
```

* `#setMessageSubject` - Set the email message subject

```javascript
email.setMessageSubject('foo');
```

### S3Destination

#### To Be Implemented


## License

[Apache 2.0](LICENSE) &copy; 2016 CrossLead, Inc.
