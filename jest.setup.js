const elementMock = { addEventListener: jest.fn() };
jest.spyOn(document, 'querySelector').mockImplementation(() => elementMock);
