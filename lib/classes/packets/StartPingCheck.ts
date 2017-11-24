// This file has been automatically generated by writePacketClasses.js

import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class StartPingCheckPacket implements Packet
{
    name = 'StartPingCheck';
    flags = MessageFlags.FrequencyHigh;
    id = 1;

    PingID: {
        PingID: number;
        OldestUnacked: number;
    };

    getSize(): number
    {
        return 5;
    }

}