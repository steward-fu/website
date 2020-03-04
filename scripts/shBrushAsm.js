/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function() {
 typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush() {
    var my_constant = 'STATUS_DEVICE_POWER_FAILURE STATUS_UNSUCCESSFUL LowPagePriority WdfDeviceIoDirect IRP_MJ_PNP DO_DIRECT_IO O_RDWR IO_NO_INCREMENT O_RDONLY O_WRONLY MINORBITS MINORMASK MINORBITS WdfDeviceIoNeither IRP_MN_START_DEVICE WDF_NO_OBJECT_ATTRIBUTES IRP_MN_REMOVE_DEVICE STATUS_SUCCESS GENERIC_READ WDF_NO_HANDLE GENERIC_WRITE METHOD_BUFFERED IRP_MJ_DEVICE_CONTROL STATUS_PENDING NULL FILE_ANY_ACCESS METHOD_OUT_DIRECT METHOD_IN_DIRECT METHOD_NEITHER FILE_SHARE_READ STATUS_CANCELLED FILE_FLAG_OVERLAPPED WdfIoQueueDispatchSequential WdfDeviceIoBuffered DISPATCH_LEVEL KernelMode OPEN_EXISTING FILE_ATTRIBUTE_NORMAL INFINITE THREAD_ALL_ACCESS INVALID_HANDLE_VALUE IRP_MJ_CREATE IRP_MJ_CLOSE IRP_MJ_WRITE IRP_MJ_READ FILE_DEVICE_UNKNOWN Executive FALSE TRUE DO_BUFFERED_IO DO_DEVICE_INITIALIZING';
    var my_keyword = 'cpl dptr movc acc cjne jb rlc set rrc jc sjmp syntax thumb_func arm thumb setb clr djnz beqz divu addu mflo mfhi sltiu bnez sll sra lb mul srl sltu ori sh wait addiu move jal sw li lui andi sb lw lbu jr j mtc0 org jmp anl jz orl xrl addne ldreq addeq ldrne orrne strne bls lsr stmfd ldmfd sp proto ORIGIN LENGTH MEMORY SECTIONS mvn ands movne moveq blt dcd dcb p15 c1 c0 orr mrc mcr bic beq strb strh ldrb ldrh bx bxeq addge tst nop sub subs bal global ldr modinfo asciz zero str align extern equiv macro lsl b bl req endm lr pc r0 r1 r2 r3 r4 cmp bne r5 r6 r7 r8 r9 r10 r11 r12 struct ends dup push pop end public mov fastcall inc dec movzx if _try _finally endif else elseif proc eax equ ebx ecx edx edi esi movz and or xor call invoke Push Pop local offset addr sizeof PTR not lea add sub while ret reti endp uses endw bl break dl';
    var my_type = 'long void WDFTIMER qword WDFDEVICE WDF_TIMER_CONFIG WDF_OBJECT_ATTRIBUTES WDF_DRIVER_CONFIG PMDL typedef VOID WDFFUNC PWDF_FILEOBJECT_CONFIG PFN_WDF_DEVICE_FILE_CREATE PFN_WDF_FILE_CLOSE PFN_WDF_FILE_CLEANUP WDFREQUEST WDFFILEOBJECT WDFDRIVER WDFQUEUE PWDFDEVICE_INIT DRIVER_EXTENSION WDF_FILEOBJECT_CONFIG WDF_IO_QUEUE_CONFIG dword dd db PIRP _IRP IO_STACK_LOCATION PIO_STACK_LOCATION NTSTATUS PKTIMER BOOLEAN LONG PKDPC KDPC PDRIVER_OBJECT KTIMER PUNICODE_STRING PDEVICE_OBJECT DEVICE_OBJECT BYTE word LIST_ENTRY WDFMEMORY byte UNICODE_STRING PVOID DRIVER_OBJECT DWORD LARGE_INTEGER OVERLAPPED IO_CSQ KSPIN_LOCK PIO_CSQ KIRQL PKIRQL';
    var my_function = 'assert WdfTimerStart WdfTimerStop WdfDeviceWdmGetDeviceObject WDF_TIMER_CONFIG_INIT_PERIODIC WDF_OBJECT_ATTRIBUTES_INIT WdfTimerCreate WdfRequestSetInformation WdfRequestRetrieveUnsafeUserOutputBuffer WdfRequestProbeAndLockUserBufferForWrite WdfMemoryGetBuffer WdfRequestRetrieveUnsafeUserInputBuffer WdfRequestProbeAndLockUserBufferForRead WdfRequestRetrieveOutputWdmMdl WdfRequestRetrieveInputWdmMdl __copy_to_user __copy_from_user MAJOR MINOR printk MKDEV init_module cleanup_module printf open read write close WDF_FILEOBJECT_CONFIG_INIT IoStartTimer cdev_del unregister_chrdev_region alloc_chrdev_region cdev_add cdev_alloc IoStopTimer IoAttachDeviceToDeviceStack WdfDeviceInitAssignName WdfDeviceCreate IoInitializeTimer WdfRequestComplete memset WdfRequestCompleteWithInformation memcpy WDF_DRIVER_CONFIG_INIT WdfDeviceInitSetIoType WdfDeviceInitSetFileObjectConfig WdfDeviceCreateSymbolicLink WDF_IO_QUEUE_CONFIG_INIT_DEFAULT_QUEUE WdfIoQueueCreate WdfDriverCreate crt_printf IoDetachDevice IoSkipCurrentIrpStackLocation WdfRequestRetrieveOutputMemory WdfMemoryCopyFromBuffer WdfRequestRetrieveInputMemory WdfMemoryCopyToBuffer IoCallDriver KeSetTimerEx KeSetTimer IoMarkIrpPending IoStartPacket KeCancelTimer DeviceIoControl wsprintf sprintf KeInitializeTimer IsListEmpty RemoveHeadList InsertHeadList InitializeListHead KeInitializeDpc IoCsqInsertIrp KeInitializeSpinLock KefReleaseSpinLockFromDpcLevel IoCsqInitialize KfAcquireSpinLock KfReleaseSpinLock CancelIo InsertTailList RemoveEntryList MmGetMdlVirtualAddress CreateEvent WaitForSingleObject IoStartNextPacket ProbeForRead strcpy strcmp CTL_CODE strlen WriteFile StrLen crt_memset MmGetMdlByteCount MmGetSystemAddressForMdlSafe IoGetCurrentProcess ReadFile PsTerminateSystemThread ExitProcess DbgPrint KeDelayExecutionThread PsCreateSystemThread CreateFile ObReferenceObjectByHandle ZwClose KeWaitForSingleObject ObDereferenceObject Sleep SleepEx CloseHandle CTA0 IofCompleteRequest IoGetCurrentIrpStackLocation IoDeleteDevice DriverEntry RtlInitUnicodeString IoCreateDevice IoCreateSymbolicLink IoDeleteSymbolicLink';

    this.regexList = [
      {regex: /^ *;.*/gm, css: 'my_comment'},
      {regex: /^ *@.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.386.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.text.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.bss.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.align.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.code.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.data.*/gm, css: 'my_preprocessor'},
      {regex: /^ *option.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.section.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.set.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.const.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.model.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.include.*/gm, css: 'my_preprocessor'},
      {regex: /^ *include.*/gm, css: 'my_preprocessor'},
      {regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
      {regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
      {regex: new RegExp(this.getKeywords(my_constant),'gm'), css:'my_constant bold'},
      {regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'},
    ];
  };

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['asm', 'assembly', 'assembler'];
  SyntaxHighlighter.brushes.Cpp = Brush;
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
