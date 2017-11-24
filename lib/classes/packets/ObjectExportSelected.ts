// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class ObjectExportSelectedPacket implements Packet
{
    name = 'ObjectExportSelected';
    flags = MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = 4294901883;

    AgentData: {
        AgentID: UUID;
        RequestID: UUID;
        VolumeDetail: number;
    };
    ObjectData: {
        ObjectID: UUID;
    }[];

    getSize(): number
    {
        return ((16) * this.ObjectData.length) + 35;
    }

}