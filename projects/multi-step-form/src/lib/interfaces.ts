export interface IStep {
  /**
   * a visual cue for the step, for example Personal Details
   */
  label: string;

  /**
   * a key to identify the step, for example personal-details
   */
  key: string;

  /**
   * a component instance to inject dynamically into the outlet
   */
  component: any;
}
