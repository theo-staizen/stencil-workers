import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../workers/format.worker';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() fullName: string;

  async componentWillRender() {
    this.fullName = await format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.fullName}</div>;
  }
}
