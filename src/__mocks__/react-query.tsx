import { waitFor } from "@testing-library/dom";

const mockOnCreateRule = jest
  .fn()
  .mockResolvedValue({ data: "mocked response" });

// this mock can be improved depending on the consumer component
jest.mock("features/rules/hooks/rule-versions.hooks", () => ({
  useCreateRuleVersion: () => ({
    mutateAsync: mockOnCreateRule,
  }),
}));

await waitFor(() =>
    expect(mockOnCreateRule).toHaveBeenCalledWith(
      expect.objectContaining({
        parameters: expect.arrayContaining([
          { key_name: "thickness", value: "100" },
        ]),
      }),
      // Add anything for the mutation options, or provide them if necessary
      expect.anything()
    )
  );