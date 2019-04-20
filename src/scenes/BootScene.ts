import { BaseScene } from './BaseScene';

export class BootScene extends BaseScene {
	constructor(key: string, options: any) {
		super('BootScene');
	}

	public preload(): void {
		// empty
	}

	public init(): void {
		// empty
	}

	public create(): void {
		console.info('BootScene - create()');
		this.scene.start('LoadScene', {});
	}

	public update(time: number, delta: number): void {
		// empty
	}
}
