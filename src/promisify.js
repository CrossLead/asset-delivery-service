
export default function (original, settings) {
  return function (...args) {
    const multipleArguments = settings && settings.multiArgs;

    let _promisified = undefined;
    if (settings && settings.thisArg) {
      _promisified = settings.thisArg;
    } else if (settings) {
      _promisified = settings;
    }

    return new Promise((resolve, reject) => {
      args.push((err, ...args) => {
        if (err) {
          return reject(err);
        };

        if (false === !! multipleArguments) {
          return resolve(args[0])
        }

        resolve(args);
      });

      original.apply(_promisified, args);
    });
  }
}
