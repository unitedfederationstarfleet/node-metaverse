// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class ParcelRenamePacket implements Packet
{
    name = 'ParcelRename';
    flags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = 4294902162;

    ParcelData: {
        ParcelID: UUID;
        NewName: string;
    }[];

    getSize(): number
    {
        return ((this.calculateVarVarSize(this.ParcelData, 'NewName', 1) + 16) * this.ParcelData.length) + 1;
    }

    calculateVarVarSize(block: object[], paramName: string, extraPerVar: number): number
    {
        let size = 0;
        block.forEach((bl: any) =>
        {
            size += bl[paramName].length + extraPerVar;
        });
        return size;
    }

}