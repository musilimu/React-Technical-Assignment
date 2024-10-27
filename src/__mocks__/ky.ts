const ky = jest.fn();
//@ts-ignore
ky.get = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
//@ts-ignore
ky.post = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
//@ts-ignore
ky.create = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));

export default ky;
